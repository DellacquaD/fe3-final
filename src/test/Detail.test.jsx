import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Detail from '../Routes/Detail'


beforeEach(() =>{
    render(<Detail/>)
})

describe('Detail', () => {
    it('Verificacion de campos en el Detail', () => {
        const fieldName = screen.getByText("Name")
        const fieldEmail = screen.getByText("Email")
        const fieldPhone = screen.getByText("Phone")
        const fieldWebsite = screen.getByText("Website")

        expect(fieldName).toBeInTheDocument();
        expect(fieldEmail).toBeInTheDocument();
        expect(fieldPhone).toBeInTheDocument();
        expect(fieldWebsite).toBeInTheDocument();
 
    })
})