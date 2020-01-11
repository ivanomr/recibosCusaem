function getAlerta(tipo){
		var alertas={}
		alertas["Alerta"]="#cdcc13"
		alertas["Existente"]="#31a611"
		alertas["Error"]="#d52909"
		alertas["Inexistente"]="#1368cd"

        
        return alertas[tipo]
}

export default getAlerta;