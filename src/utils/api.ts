
export const json = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {

    let headers: any = {
        'Content-Type': 'application/json'
    }

    try {
        let result = await fetch(uri, {
            method, 
            headers, 
            body: JSON.stringify(body)
        });
        if (result.ok) {
            return <T>(await result.json());
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}