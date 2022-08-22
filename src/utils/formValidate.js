export const formValidate = () => {
    return {
        required: {
            value:true,
            message:'Campo Obligatorio'
        },                       
        patternEmail:{
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: 'Formato de email incorrecto'
        },
        patternPhone:{
            value:  /^\\(?(\d{3,5})?\\)?\s?(15)?[\s|-]?(4)\d{2,3}[\s|-]?\d{4}$/,
            message:'El formato del número de teléfono es incorrecto'
        },
        validateTrim:{
            trim: (v) => {
                if (!v.trim()){ 
                    return 'Escribe algo' 
                }
                return true;
            }    
        },
    }
}