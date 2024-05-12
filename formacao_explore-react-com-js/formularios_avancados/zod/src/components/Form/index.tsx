import './styles.scss';
import TextField from '../TextField';
import TextFieldPassword from '../TextFieldPassword';
import { useForm } from 'react-hook-form';
import { ZodError, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ListDropDown from '../ListDropDown';


type FormProps = z.infer<typeof schema>;

const schema = z.object({
    password: z.string().min(8, "A senha  precisa ter pelo  menos 8  caracteres"),
    passwordConfirmation: z.string(),
    quantity: z.number({
        errorMap: () => {
            return {
                message: "Informe um número válido"
            }
        }
    }).positive("Informe um número maior que 0"),
    url: z.string().url("Insira uma URL válida"),
    role: z.enum(['admin', 'user'], {
        errorMap: () => {
            return {
                message: "Informe 'admin' ou 'user'"
            }
        }
    }),
    select: z.string(),
    agree: z.boolean(),
}).refine((fields) => fields.password === fields.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: "As senhas devem ser iguais" // Se (depois de todos os campos preenchidos) as senha não forem iguais, aparecerá essa messagem
}).refine((fields) => fields.agree === true, {
    path: ['agree'],
    message: "Você precisa aceitar os termos de privacidade"
}).refine((fields) => fields.select.length > 1, {
    path: ['select'],
    message: "Selecione uma opção"
});


const Form = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormProps) => {
        console.log(data)
    }

    const options = [
        "Option 1",
        "option 2",
        "Option 3",
        "Option 4",
        "Option 5"
    ];

    return (
        <div className="container-form">
            <h1>Formulários com ZOD</h1>

            <form
                onSubmit={event => {
                    event.preventDefault();
                    handleSubmit(onSubmit)();
                }}
            >
                <TextFieldPassword
                    label="Senha"
                    placeholder="Informe sua senha"
                    registerName="password"
                    register={register}
                    error={!!errors?.password}
                    messageError={errors?.password?.message}
                />
                <TextFieldPassword
                    label="Confirme sua senha"
                    placeholder="Insira sua senha novamente"
                    registerName="passwordConfirmation"
                    register={register}
                    error={!!errors?.passwordConfirmation}
                    messageError={errors?.passwordConfirmation?.message}
                />
                <TextField
                    type="number"
                    label="Quantidade"
                    placeholder="Informe a quantidade"
                    registerName="quantity"
                    register={register}
                    validation={{
                        setValueAs: (value: string) => parseInt(value, 10)
                    }}
                    error={!!errors?.quantity}
                    messageError={errors?.quantity?.message}
                />
                <TextField
                    label="URL"
                    placeholder="Informe a URL"
                    registerName="url"
                    register={register}
                    error={!!errors?.url}
                    messageError={errors?.url?.message}
                />
                <TextField
                    label="Permissão"
                    placeholder="Informe a permissão"
                    registerName="role"
                    register={register}
                    error={!!errors?.role}
                    messageError={errors?.role?.message}
                />
                <ListDropDown
                    label="Select exemplo"
                    options={options}
                    name='select'
                    register={register}
                    error={!!errors?.select}
                    messageError={errors?.select?.message}
                />

                <div className="box-privacy-terms">
                    <input
                        type="checkbox"
                        {...register('agree')}
                    />
                    <label> Concordo com os termos de privacidade</label>
                    <p className="input-error-message">{errors?.agree?.message}</p>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;
