import * as React from "react"
import './formSignUp.css'
import logo from '../../assets/logo dark.png'

const FormSignUp = () => {
    return (
        <div className="create-account">
            <div className='img'>
                <img className='img-logo' src={logo} alt="Imagem da logo" />
            </div>
            <form className='create-account_form'> 
                <div className='form_group'>
                    <input name="name" className='group_name input' type="text" required/>
                    <label className="input-label" htmlFor="name">Nome</label>
                </div>
                <div className='form_group'>
                    <input name="last-name" className='group_last-name input' type="text" required/>
                    <label className="input-label" htmlFor="last-name">Sobrenome</label>
                </div>
                <div className='form_group'>
                    <input name="password" className='group_password input' type="password" required/>
                    <label className="input-label" htmlFor="password">Senha</label>
                </div>
                <div className='form_group'>
                    <input name="confirm-password" className='group_confirm-password input' type="password" required/>
                    <label className="input-label" htmlFor="confirm-password">Confirmar senha</label>
                </div>
                <div className='form_group'>
                    <input name="date-of-birth" className='group_date-of-birth input' type="date" required/>
                    <label className="input-label" htmlFor="date-of-birth">Data de nascimento</label>
                </div>
                <div className='form_group'>
                    <input name="cep" className='group_cep input' type="text" required/>
                    <label className="input-label" htmlFor="cep">CEP</label>
                </div>
                <div className='form_group'>
                    <input name="street" className='group_street input' type="text" required/>
                    <label className="input-label" htmlFor="street">Rua</label>
                </div>
                <div className='form_group'>
                    <input name="number" className='group_number input' type="text" required/>
                    <label className="input-label" htmlFor="number">Número</label>
                </div>
                <div className='form_group'>
                    <input name="complement" className='group_complement input' type="text" required/>
                    <label className="input-label" htmlFor="complement">Complemento</label>
                </div>
                <div className='form_group'>
                    <input name="neighborhood" className='group_neighborhood input' type="text" required/>
                    <label className="input-label" htmlFor="neighborhood">Bairro</label>
                </div>
                <div className='form_group'>
                    <input name="city" className='group_city input' type="text" required/>
                    <label className="input-label" htmlFor="city">Cidade</label>
                </div>
                <div className='form_group'>
                    <select className='group_uf' name="uf">
                        <option selected>UF</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div className='form_group'>
                    <input name="confirm-terms-and-conditions" className='checkbox_input' type="checkbox" required/>
                    <label className="confirm-terms-and-conditions" htmlFor="confirm-terms-and-conditions" >
                        Li e concordo com os <a href="#">termos e condições</a>.
                    </label>
                </div>
                <div className='form_btn'>               
                    <button className='form_sign-up' type="submit">Criar conta</button>          
                </div>
            </form>
            </div>
    );
}

export default FormSignUp;
