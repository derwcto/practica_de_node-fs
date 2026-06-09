function registrarUsuario(nombre_usuario, correo, contrasena) {
    let nombreLimpio = nombre_usuario.trim();
    
    if (nombreLimpio.length < 3) {
        return "Error: El nombre de usuario debe tener al menos 3 caracteres.";
    }

    if (!correo.includes('@') || 
        (!correo.endsWith('.com') && !correo.endsWith('.org') && !correo.endsWith('.net'))) {
        return "Error: El formato del correo electrónico no es válido.";
    }

    if (contrasena.length < 8) {
        return "Error: La contraseña debe tener al menos 8 caracteres.";
    }

    let correoMinusculas = correo.toLowerCase();

    return "Usuario registrado con éxito. Correo guardado: " + correoMinusculas;
}

console.log("Caso 1 (Éxito):", registrarUsuario("   juan   ", "JUAN@correo.com", "12345678")); 
console.log("Caso 2 (Error Nombre):", registrarUsuario("ju", "juan@correo.com", "12345678"));    
console.log("Caso 3 (Error Correo):", registrarUsuario("juan", "juancorreo.com", "12345678"));   
console.log("Caso 4 (Error Contraseña):", registrarUsuario("juan", "juan@correo.com", "123"));
