const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

/** CLOUDINARY
 * generar cloudPreset en cloudinary
 */
const cloudURL    = 'https://api.cloudinary.com/v1_1/dkd7g0x8a/upload';
const cloudPreset = 'tpflbjqg';


const obtenerChiste = async() => {
  try {
    const resp = await fetch( jokeUrl );

    if ( !resp.ok ) throw 'no se pudo realizar la peticion';
    
    const { icon_url, id, value } = await resp.json();

    return { id, value, icon_url };

  } catch (error) {
    throw error;
  }
}


const obtenerUsuarios = async() => {
  const resp = await fetch(urlUsuarios);
  const { data:usuarios } = await resp.json();

  return usuarios;
}

/** archivo :: file */
const subirImagen = async( archivo ) => {
  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', archivo);

  try {
    const resp = await fetch( cloudURL, {
      method: 'POST',
      body: formData
    });

    if ( resp.ok ) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
}


  export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
  }