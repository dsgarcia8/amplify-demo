# Amplify demo
**Pre requisitos**

-   Instalar y configurar Cli de Amplify (durante la configuración se crea un usuario nuevo en AWS al que se le debe dar permisos de admin) [Instalar CLI Amplify](https://docs.amplify.aws/cli/start/install/)
    

**Procedimiento para implementar Amplify**

En un terminal se deben seguir los siguientes pasaos

1.  Inicializar Amplify en el root del proyecto con el siguiente comando . Una vez inicializado se crean de manera automática la carpeta amplify en el root y el archivo aws-exports.js en src
    
    ```
    amplify init
    ```
    
2.  Importar un recurso ya existente de Cognito, en nuestro caso se debe elegir la opción de user pool , en caso de que el recurso cumpla con los requerimientos mínimos , la importación será exitosa y los archivos aws-exports.js y team-provider-info.js se actualizarán con la información el user pool.
    
    ```
    amplify import auth
    ```
    
3.  Subir los cambios en la nube

    ```
    amplify push
    ```
