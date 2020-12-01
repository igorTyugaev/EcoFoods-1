export default function MakeConfig(token) {
    return {
        headers: {
            Authorization: 'EcoFoods' + ((token) ? ` ${token.toString()}` : ''),
        }
    }
}