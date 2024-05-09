import './styles.scss';
import { useForm } from "react-hook-form";
import validator from 'validator'; // Biblioteca para validar email
import { IDataForm } from "../../interfaces/IDataForm";
import TextField from "../TextField";
import TextFieldPassword from "../TextFieldPassword";
import ListDropDown from "../ListDropDown";


const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch // serve para manitorar o valor de um input, OBS: toda vez que o input ser atualizado o componente será renderizado
    } = useForm<IDataForm>();

    // Para verificar se a senha é igual a sua confirmação
    const watchPassword = watch("password");

    const onSubmit: any = (data: IDataForm) => {
        console.log(data)
    };

    return (
        <div className="container-form">
            <h1>Formulário com React-hook-form</h1>
            <div className="box-form">
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
                        validate: (value) => value !== "0"
                    }}
                />

                <div className="box-privacy-terms">
                    <input
                        type="checkbox"
                        {...register('privacyTerms', {
                            required: true
                        })}
                    />
                    <label> Concordo com os termos de privacidade</label>
                </div>

                <button onClick={() => handleSubmit(onSubmit)()}>
                    Criar Conta
                </button>
            </div>
        </div>
    )
}
export default Form;
