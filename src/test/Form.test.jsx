import  '@testing-library/jest-dom'
import {render, screen , fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Form from '../Components/Form';

beforeEach(() =>{
    render(<Form/>);
})

test('Verifica que se renderizan los elementos nececarios del form', () => {
    
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

    const wordMeaning = await screen.findByText(/Gracias Brahian, te contactaremos cuanto antes vía mail./i)

    expect(wordMeaning).toBeInTheDocument();   
})

