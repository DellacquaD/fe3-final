import  '@testing-library/jest-dom'
import axios from "axios";

const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users/7');

test("Testeando fetch",  () => {
    return fetchData().then(data => { 
        expect(data.data.id).toBe(7);
        expect(data.data.name).toBe("Kurtis Weissnat");
        expect(data.data.username).toBe("Elwyn.Skiles");
    })
})