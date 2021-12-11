import React, {useState} from 'react'
import styled from "styled-components"
import {useTranslation} from "react-i18next";
import {MdAttachEmail, MdPhoneCallback} from "react-icons/all";
import Swal from "sweetalert2";

const Contacts = () => {
	const {t} = useTranslation()
	const [inputs, setInputs] = useState({
		name: "",
		phone: "",
		message: ""
	})
	const [errors, setErrors] = useState({
		name: null,
		phone: null,
		message: null
	})

	const handleChange = (e) => {


		setInputs({...inputs, [e.target.name]: e.target.value})
		setErrors({
			name:null,
			phone: null,
			message: null
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		let error = {}
		if (!inputs.name.length || !inputs.phone ) {

			!inputs.name && (error.name = "Обязательное поле")
			!inputs.phone && (error.phone = "Обязательное поле")
			!inputs.message && (error.message = "Обязательное поле")

			setErrors(old => ({...old, ...error}))
			return
		}
		else{
			const dataForDeliver = {
				name: inputs.name,
				phone: inputs.phone,
				message: inputs.message

			}
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: `Your message successfully sended !!!  <br/> ${JSON.stringify(dataForDeliver)}`,
				showConfirmButton: false,
				timer: 3000
			})
			setInputs({
				name:"",
				message: "",
				phone: ""
			})
		}

	}

	return (
		<ContactsWrapper>
			<div className="container">
				<h1 className={"title"}>Контакты</h1>
				<ContactHeader>
					<div className="info">
						<h1 className={"title"}>{t("Наш адрес")} : </h1>
						<address>
							<pre>Октябрьский район, 720005,</pre>
							<pre>г. Бишкек, ул. Юнусалиева 87,</pre>
						</address>
						<div className="phone">
							Тел : <a href="tel:0706944347">0706944347</a>
						</div>
					</div>
					<div className="image">
						<img src="https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg" alt=""/>
					</div>
				</ContactHeader>
				<ContactContent>
					<div className="contacts">
						<div className="phone">
							<a className="phone_icon" href="tel:0706944347">
								<MdPhoneCallback/>
							</a>
							<a href="tel:0706944347">
								0706944347
							</a>
						</div>
						<div className="email">
							<div className="email_icon">
								<MdAttachEmail/>
							</div>
							<a href="@ernazanurbekuulu15">@ernazanurbekuulu15</a>
						</div>
					</div>
					<div className="input_forms">
						<form onSubmit={handleSubmit}>
							<label htmlFor="name">{t("Имя")}</label>
							<span className="error_handle"> {errors.name && errors.name}</span>
							<input className="input_form" name={"name"} id={"name"} type="text" value={inputs.name}
							       onChange={handleChange}
							/>
							<label htmlFor="phone">{t("Телефон номер")}</label>
							<span className="error_handle"> {errors.phone && errors.phone}</span>
							<input className="input_form" id={"phone"} type="number" name={"phone"} value={inputs.phone}
							       onChange={handleChange}/>
							<label htmlFor="message">{t("Сообщения")}</label>
							<textarea type="number" id={"message"} value={inputs.message} name={"message"}
							          onChange={handleChange}></textarea>
							<button type={"submit"} className="custom_button">{t("Отправить")}</button>
						</form>
					</div>
				</ContactContent>
			</div>

		</ContactsWrapper>
	)
}

export default Contacts

const ContactsWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;

  .title {
    margin-bottom: 50px;
  }
`
const ContactHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media(max-width: 768px){
    display: block;
  }

  .phone {
    margin-top: 50px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .image {
    img {
      width: 100%;
    }
  }

  address {
    font-size: 25px;
    @media(max-width: 768px){
      font-size: 20px;
    }
    pre {
      margin: 20px 0;
    }
  }
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  align-items: center;
  @media(max-width: 768px){
    display: block;
  }

  .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .phone {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-weight: 500;

    .phone_icon {
      font-size: 50px;
      margin-bottom: 20px;
      animation: bounce; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s;
      animation-iteration-count: infinite;
      line-height: 25px;
    }
  }

  .email {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-weight: 500;

    .email_icon {
      font-size: 50px;
      margin-bottom: 20px;
      animation: bounce; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s;
      animation-iteration-count: infinite;
      line-height: 25px;

    }
  }

  .input_forms {
    form {
      display: flex;
      flex-direction: column;
    }

    label {
      line-height: 2;
      font-weight: 500;
      font-size: 18px;
    }

    .input_form {
      padding: 10px;
    }

    textarea {
      height: 100px;
      padding: 10px;
    }

    button {
      margin-top: 30px;
    }
    .error_handle{
      color: red;
    }
  }
`
