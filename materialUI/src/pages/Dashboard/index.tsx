import { LayoutBasePage } from "../../layouts";
import { Toolbar } from "../../components";

export const Dashboard = () => {
    return (
        <LayoutBasePage
            title="Página inicial"
            toolbar={
                <Toolbar
                    showInput
              
                    buttonText="nova"
                />
            }
        >

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quod nam repudiandae alias temporibus pariatur minus inventore quos eos veritatis voluptatibus iusto ut, neque quisquam nobis doloribus tempora repellat. Numquam.

        </LayoutBasePage>
    )
};
