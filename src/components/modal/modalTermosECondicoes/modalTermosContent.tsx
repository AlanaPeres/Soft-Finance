import React from "react";
import {ModalContainer, Scroll, Titulo, Texto, Footer, Confirmar} from '../modalTermosECondicoes/modalTermos.style'
import { useState } from 'react';


export const ModalTermoseCondicoes = ()=> {
    const [isModalVisible, setIsModalVisible] = useState(true);
    
    const fecharModal = () => {
        setIsModalVisible(false);
    }
    return (
        
        <div className="modalContent">
            {isModalVisible && (

            <ModalContainer>
            <Titulo>TERMOS E CONDIÇÕES</Titulo>            
            <Texto>
                <Scroll>
                    <p>Para usar o Aplicativo, você deve ter pelo menos 18 anos e possuir capacidade legal para celebrar contratos. Você também deve ter uma conta bancária válida em seu nome. Você é responsável por garantir que as informações fornecidas sejam precisas e completas.</p>
                    <p>Você é responsável pela segurança da sua conta e informações de login, incluindo a manutenção da confidencialidade de sua senha. Você é responsável por todas as atividades que ocorram em sua conta. Você deve nos notificar imediatamente se suspeitar de qualquer atividade não autorizada em sua conta.</p>
                    <p>Respeitamos sua privacidade e cumprimos todas as leis aplicáveis de proteção de dados. Nosso compromisso com a sua privacidade está descrito em nossa Política de Privacidade.</p>
                    <p> O Aplicativo e os Serviços são fornecidos apenas para seu uso pessoal e não comercial. Você concorda em não utilizar o Aplicativo ou os Serviços para qualquer finalidade ilegal ou não autorizada. Você concorda em cumprir todas as leis, regras e regulamentos aplicáveis ao uso do Aplicativo e dos Serviços.</p>
                    <p>Nosso objetivo é fornecer acesso contínuo e ininterrupto ao Aplicativo e aos Serviços. No entanto, ocasionalmente, podem ocorrer interrupções programadas ou não programadas do Aplicativo e dos Serviços. Não nos responsabilizamos por qualquer interrupção ou falha no Aplicativo ou nos Serviços.</p>
                    <p>O Aplicativo e os Serviços são protegidos por leis de propriedade intelectual e pertencem a nós ou a nossos licenciadores. Você não tem direito, exceto conforme expressamente concedido por nós, a usar qualquer marca registrada, logotipo ou nome de marca em qualquer material que você criar, incluindo em seu site ou em qualquer material de publicidade.</p>    
                    <p>Podemos atualizar ou alterar estes Termos a qualquer momento. O uso continuado do Aplicativo ou dos Serviços após qualquer alteração constitui sua aceitação dos novos Termos.</p>
                    <p>Podemos rescindir ou suspender o seu acesso ao Aplicativo e aos Serviços a qualquer momento, sem aviso prévio, por qualquer motivo ou sem motivo.   </p>  
                </Scroll>   
            </Texto>      
                <Footer>
                    <Confirmar onClick={fecharModal}>FECHAR</Confirmar>
                </Footer>
                </ModalContainer>
            )}    
        </div>
    )

}