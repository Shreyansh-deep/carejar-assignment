
export const getDepartments = async () => {
    const url = 'https://mocki.io/v1/d03facb8-26e5-4eca-907b-5f04519a3a77';

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.map((d,i)=> ({id: i+1, ...d}));
    } catch (error) {
        console.error(error);
    }
}