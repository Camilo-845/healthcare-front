# MediCare - Plataforma de Salud

## Descripción

MediCare es una plataforma moderna de gestión de salud que permite a pacientes y profesionales médicos gestionar citas, historias clínicas, y comunicaciones de manera segura y eficiente. La plataforma ofrece una interfaz intuitiva y funcionalidades completas para satisfacer las necesidades de todos los usuarios del sistema de salud.

## Características Principales

### Autenticación y Seguridad

- Sistema de inicio de sesión seguro con autenticación de dos factores
- Recuperación de contraseña mediante verificación por correo electrónico
- Bloqueo de cuenta después de múltiples intentos fallidos
- Autorización basada en roles (paciente, médico, administrador)
- Registro de actividades de inicio de sesión
- Caducidad y validación de contraseñas

### Registro de Pacientes

- Creación de perfiles de pacientes con información personal y médica
- Gestión de documentos de identidad y consentimientos
- Historial médico familiar
- Información de contacto de emergencia
- Actualización y mantenimiento de perfiles

### Gestión de Historias Clínicas

- Creación y acceso a historias clínicas
- Visualización de información médica organizada
- Gráficos y datos históricos
- Gestión de documentos adjuntos
- Generación de informes médicos

### Agendamiento de Citas

- Programación de citas médicas
- Confirmaciones y recordatorios automáticos
- Cancelación y reprogramación
- Visualización de calendario de citas
- Gestión de disponibilidad de profesionales

### Panel de Administración

- Gestión completa de usuarios
- Monitoreo de seguridad
- Estadísticas y reportes
- Configuración del sistema

### Tecnologías Utilizadas

- Frontend: Next.js, React, Tailwind CSS
- UI Components: shadcn/ui
- Iconos: Lucide React
- Autenticación: Sistema personalizado con soporte para 2FA

### Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/tu-usuario/medicare.git
cd medicare
```

2. Instala las dependencias:

```shellscript
npm install
```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```plaintext
# Base de datos
DATABASE_URL=tu_url_de_conexion

# Autenticación
AUTH_SECRET=tu_clave_secreta

# Email (para recuperación de contraseña y notificaciones)
EMAIL_SERVER=smtp://usuario:contraseña@servidor:puerto
EMAIL_FROM=noreply@tudominio.com
```

4. Ejecuta el servidor de desarrollo:

```shellscript
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```
medicare/
├── app/                    # Rutas y páginas de la aplicación
│   ├── admin/              # Panel de administración
│   ├── dashboard/          # Dashboard de usuario
│   ├── login/              # Página de inicio de sesión
│   ├── signup/             # Página de registro
│   └── ...
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes de interfaz de usuario
│   └── ...
├── hooks/                  # Hooks personalizados
├── lib/                    # Utilidades y funciones auxiliares
├── public/                 # Archivos estáticos
└── ...
```

## Uso

### Para Pacientes

1. Regístrate en la plataforma proporcionando tu información personal
2. Verifica tu correo electrónico
3. Inicia sesión en tu cuenta
4. Navega por el dashboard para:

5. Ver tus próximas citas
6. Acceder a tus historias clínicas
7. Programar nuevas citas
8. Comunicarte con tus médicos

### Para Médicos

1. Accede con tus credenciales de médico
2. Gestiona tu agenda de citas
3. Accede a las historias clínicas de tus pacientes
4. Registra diagnósticos y tratamientos

### Para Administradores

1. Accede al panel de administración
2. Gestiona usuarios (pacientes y médicos)
3. Monitorea la seguridad del sistema
4. Configura parámetros del sistema
