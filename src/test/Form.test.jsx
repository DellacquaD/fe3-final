import  '@testing-library/jest-dom'
import {render, screen , fireEvent} from '@testing-library/react'
import Form from '../Components/Form';

beforeEach(() =>{
    render(<Form/>);
})


test('Verificar que se renderizan los elementos necesarios del form', () => {
    
    const inputName = screen.getByLabelText("name");

    const inputEmail = screen.getByLabelText("email");  

    const btnSubmit= screen.getByRole("button", {name: /Submit/i}); 

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
})

test('Verifica que el nombre ingresado por parametro, es el mostrado en pantalla', async () => {
    
    const inputName = screen.getByLabelText("name");
    fireEvent.change(inputName, {target: {value: 'Brahian'}})

    const inputEmail = screen.getByLabelText("email");  
    fireEvent.change(inputEmail, {target: {value: 'brahian@gamil.com'}})

    const btnSubmit= screen.getByRole("button", {name: /Submit/i}); 
    fireEvent.click(btnSubmit)

    const wordMeaning = await screen.findByText(/Thanks Brahian, we will contact you as soon as possible./i)

    expect(wordMeaning).toBeInTheDocument();   
})

