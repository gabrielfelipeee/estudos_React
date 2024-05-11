import './styles.scss';
import { useForm } from "react-hook-form";
import validator from 'validator'; // Biblioteca para validar email
import { IDataForm } from "../../interfaces/IDataForm";
import TextField from "../TextField";
import TextFieldPassword from "../TextFieldPassword";
import ListDropDown from "../ListDropDown";
import { useUserAdd } from '../../hooks/useUsersMutate';


const Form = () => {
    const { mutate: mutateAdd } = useUserAdd();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        watch // serve para manitorar o valor de um input, OBS: toda vez que o input ser atualizado o componente será renderizado
    } = useForm<IDataForm>();

    // Para verificar se a senha é igual a sua confirmação
    const watchPassword = watch("password");


    const onSubmit: any = (data: IDataForm) => {
        const { name, email, password, profession } = data; // Desestruturação de data
        mutateAdd({ name, email, password, profession });
        reset();
    };


    return (
        <div className="container-form">
            <h1>Formulário com React-hook-form</h1>
            <form
                className="box-form"
                onSubmit={(event) => {
                    event?.preventDefault();
                    handleSubmit(onSubmit)();
                }}
            >
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    name="name"
                    register={register}
                    validation={{
                        required: true
                    }}
                    errors={errors}
                />
                <TextField
                    type="email"
                    label="Email"
                    placeholder="Digite seu email"
                    name="email"
                    register={register}
                    validation={{
                        validate: (value: string) => validator.isEmail(value),
                        required: true
                    }}
                    errors={errors}
                />
                <TextFieldPassword
                    label="Senha"
                    placeholder="Crie uma senha"
                    name="password"
                    register={register}
                    validation={{
                        required: true,
                        minLength: 8,
                    }}
                    errors={errors}
                />
                <TextFieldPassword
                    name="passwordConfirmation"
                    label="Confirme sua senha"
                    placeholder="Digite sua senha novamente"
                    register={register}
                    validation={{
                        validate: (value) => value === watchPassword, // precisa ser igual a senha
                        required: true
                    }}
                    errors={errors}
                />

                <ListDropDown
                    register={register}
                    name="profession"
                    validation={{
                        validate: (value) => {
                            if (value === undefined) return false
                            return value !== "0"
                        }
                    }}
                    errors={errors}
                />

                <div className="box-privacy-terms">
                    <input
                        type="checkbox"
                        {...register('privacyTerms', {
                            required: true
                        })}
                    />
                    <label> Concordo com os termos de privacidade</label>
                    {errors?.privacyTerms && <p className="input-message">Você precisa aceitar os termos de privacidade</p>}
                </div>

                <button>
                    Criar Conta
                </button>
            </form>
        </div>
    )
}
export default Form;
