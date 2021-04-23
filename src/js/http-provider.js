const urlChistes  = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

/* fetch( url )
    .then( resp => {

        resp.json()
            .then( ({ id, value }) => {

                console.log('Id: ', id );
                console.log('Value: ', value );

            });

    }); */

/* fetch( url )
    .then( resp => resp.json())
        .then( ({ id, value}) => {
            console.log(id);
            console.log(value);
        }); */

const obtenerChiste = async () => {

    try {
        
        const resp = await fetch( urlChistes );
    
        if ( !resp.ok ) throw ('No se pudo realizar la peticion');
    
        return await resp.json();

    } catch (err) {

        throw err;
    }

}

const obtenerUsuarios = async () => {

    try {

        const resp = await fetch( urlUsuarios );

        if( !resp.ok ) throw ( 'No se puede realizar la peticion');

        const { data:usuarios} = await resp.json();

        return usuarios;
        
    } catch (err) {

        throw err;
        
    }


}

export {
    obtenerChiste,
    obtenerUsuarios
}