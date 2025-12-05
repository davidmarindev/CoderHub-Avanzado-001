// Validaciónes comunes en Sequelize:

// notNull ->
// 	No permitir null, ejemplo:

allowNull: false;
// notEmpty ->
// Cadena no vacía, ejemplo:

validate: {
  notEmpty: true;
}
// isEmail ->
// Formato de email, ejemplo:	

validate: { isEmail: true }
// isUrl ->
// 	URL válida, ejemplo:	

validate: { isUrl: true }

// isInt, isFloat, isNumeric ->
// 	Valor numérico válido, ejemplo:	

validate: { isInt: true }

// isAlpha, isAlphanumeric ->
// 	 Solo letras / letras+números, ejemplo:	

validate: { isAlpha: true }

// isIn / notIn ->
// Dentro o fuera de una lista, ejemplo: 

isIn: [['admin','user']]

// len ->
// Longitud de string, ejemplo:	

len: [3,50]
// min, max ->
// 	Valores numéricos, ejemplo:	

min: 1, max: 100

// isDate, isAfter, isBefore ->
// 	Validar fechas, ejemplo:	

validate: { isDate: true }

// isLowercase, isUppercase ->
// Validar case, ejemplo:	

validate: { isLowercase: true }

// matches ->
// Regex, ejemplo:	

matches: /^[A-Z]{3}$/

// Validaciones personalizadas:

validate: {
  isEven(value) {
    if (value % 2 !== 0) {
      throw new Error("El valor debe ser par");
    }
  }
}