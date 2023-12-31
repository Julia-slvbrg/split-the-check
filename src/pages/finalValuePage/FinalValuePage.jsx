import { useContext } from "react"
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToMainPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { ResetTableBtn, Title, Wrapper } from "./FinalValuePageStyle";
import { Header } from "../../components/header/Header";

function FinalValuePage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    const { stateClientList } = context;

    const resetTable = () => {
        goToMainPage(navigate);
        window.location.reload(false)
    };

    return(
        <>
            <Header/>
            <Wrapper>
                <Title>Os valores que cada um deve pagar são:</Title>
                {stateClientList.clientList.map((client, index) => {
                    return(
                        <ClientCard
                            key={index}
                            index={index}
                            name={client.name}
                            totalAmount={client.total}
                        />
                    )
                })}

                <ResetTableBtn 
                    onClick={() => resetTable()}
                >Montar nova mesa</ResetTableBtn>
            </Wrapper>
        </>
        
    )
}

export default FinalValuePage