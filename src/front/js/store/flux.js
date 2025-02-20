const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: 'https://effective-chainsaw-wr94pvrrp5qw3r-3001.app.github.dev/api',
			message: null,
		},
		actions: {
			register: async (formData) => {
				try {
					const store = getStore();
					const resp = await fetch(`${store.URL}/register`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					})
					const data = await resp.json()
					if (!resp.ok) {
						if (data.msg === 'Usuario vinculado a este correo, inicia sesión') {
							alert('Este correo ya está registrado. Por favor, inicia sesión.');
						} else {
							alert(`Error en el registro: ${data.error || 'Algo fue mal...'}`);
						}
						return false;
					}
					localStorage.setItem('token', data.token)
					setStore({token: data.token, auth: true})
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			login: async (formData) => {
				try {
					const store = getStore();
					const resp = await fetch(`${store.URL}/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					})
					if (!resp.ok) throw new Error('Algo fue mal...');
					const data = await resp.json()
					localStorage.setItem('token', data.token)
					setStore({token: data.token, auth: true})
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			checkUser: async () => {
				try {
					const store = getStore();
					const resp = await fetch(`${store.URL}/protected`,{
						headers: {
							'Authorization': `Bearer ${localStorage.getItem('token')}`
						}
					})
					if (!resp.ok) throw new Error('Algo fue mal...')
					if(resp.status!== 200) throw new Error('Algo fue peor..')
					const data = await resp.json()
					console.log(data)
					setStore({token: data.token, auth: true, user: data.user})

					return true;
				} catch (error) {
					console.log(error)
					return false
				}
			},
		}
	};
};

export default getState;
