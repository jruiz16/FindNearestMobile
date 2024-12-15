# FindNearestMobile

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Features

- **City Search:** Allows searching for cities by name and selecting them from a list.
- **Nearest Cities Calculation:** Calculates the nearest cities based on geographic coordinates after selecting a city.
- **Data Caching:** Improves performance by locally storing downloaded city data.
- **User-Friendly Interface:** Clear division between search and results display modules.
- **Custom Animations:** Visual loading indicator while nearest cities are being processed.

## Technologies Used

- **React Native:** Framework for cross-platform mobile app development.
- **TypeScript:** Provides static typing for more robust code.
- **Jest:** Testing framework for unit tests.
- **Axios:** HTTP client for API consumption.

## Design Patterns and SOLID Principles

### Design Patterns
- **Singleton:** Implemented in the caching system to ensure a single global instance.
- **Dependency Injection:** Services (e.g., `CityService`) depend on interfaces like `HttpClient` and `CityCache`, facilitating testing and implementation changes.
- **Page Object Model (POM):** Used to modularize and scale the presentation layer.

### SOLID Principles
- **S (Single Responsibility):** Each class and module has a single reason to change, such as the city service (`CityService`) or the cache.
- **O (Open/Closed):** Interfaces allow extending functionalities without modifying existing ones.
- **L (Liskov Substitution):** Concrete classes for `HttpClient` and `CityCache` implement their respective interfaces.
- **I (Interface Segregation):** Small, specific interfaces like `ICityCache` and `HttpClient` were created.
- **D (Dependency Inversion):** Dependencies are abstracted through interfaces and injected.

## Test Coverage

- Unit tests with Jest.
- Coverage includes:
  - **CityService:** Validation of nearest city calculations, API usage, and caching.
  - **SearchModule:** Verification of search and filtering functionality.
  - **NearestCitiesModule:** Validation of the correct display of nearest cities.
- Mocks for `HttpClient` and `CityCache`.

## Functional Requirements

1. Users can search for cities by entering the name in a text field.
2. Selecting a city from the list displays the 3 nearest cities.
3. Users can clear the search field without removing the list.
4. City data must be cached to optimize user experience.
5. The system calculates distances between cities using geographic coordinates.
6. A loading indicator should be displayed while calculating nearest cities.

## Nearest Cities Search Algorithm

1. **Input:** A selected city with coordinates (`lat`, `lng`) and a list of cities.
2. **Validation:** Filters the list of cities, excluding the selected city and ensuring valid data.
3. **Distance Calculation:** Uses the **Haversine** formula to calculate the distance between the base city’s coordinates and each remaining city.
4. **Sorting:** Orders cities by ascending distance.
5. **Result:** Returns the N nearest cities (configured via environment variables).

## Example of the Algorithm

Given:
- Base city: `City A (40.7128, -74.0060)`
- Cities:
  - `City B (34.0522, -118.2437)`
  - `City C (41.8781, -87.6298)`
  - `City D (25.7617, -80.1918)`

The algorithm calculates distances and returns:
1. `City C`
2. `City D`
3. `City B`

---

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! 🎉

You've successfully run and modified your React Native App. 🎉

---

Enjoy working with this project! Contributions and feedback are welcome!



# FindNearestMobile

Este es un nuevo proyecto de [**React Native**](https://reactnative.dev), iniciado utilizando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Características

- **Búsqueda de ciudades:** Permite buscar ciudades por nombre y seleccionarlas desde una lista.
- **Cálculo de ciudades cercanas:** Calcula las ciudades más cercanas basándose en coordenadas geográficas después de seleccionar una ciudad.
- **Almacenamiento en caché:** Mejora el rendimiento almacenando localmente los datos descargados de las ciudades.
- **Interfaz amigable:** Clara división entre los módulos de búsqueda y visualización de resultados.
- **Animaciones personalizadas:** Indicador visual de carga mientras se procesan las ciudades más cercanas.

## Tecnologías Utilizadas

- **React Native:** Framework para desarrollo de aplicaciones móviles multiplataforma.
- **TypeScript:** Proporciona tipado estático para un código más robusto.
- **Jest:** Framework para pruebas unitarias.
- **Axios:** Cliente HTTP para el consumo de APIs.

## Patrones de Diseño y Principios SOLID

### Patrones de Diseño
- **Singleton:** Implementado en el sistema de caché para garantizar una instancia global única.
- **Inyección de Dependencias:** Los servicios (por ejemplo, `CityService`) dependen de interfaces como `HttpClient` y `CityCache`, lo que facilita las pruebas y los cambios de implementación.
- **Page Object Model (POM):** Utilizado para modularizar y escalar la capa de presentación.

### Principios SOLID
- **S (Responsabilidad Única):** Cada clase y módulo tiene una sola razón para cambiar, como el servicio de ciudades (`CityService`) o la caché.
- **O (Abierto/Cerrado):** Las interfaces permiten extender funcionalidades sin modificar las existentes.
- **L (Sustitución de Liskov):** Las clases concretas para `HttpClient` y `CityCache` implementan sus respectivas interfaces.
- **I (Segregación de Interfaces):** Se crearon interfaces pequeñas y específicas como `ICityCache` y `HttpClient`.
- **D (Inversión de Dependencias):** Las dependencias se abstraen mediante interfaces y se inyectan.

## Cobertura de Pruebas

- Pruebas unitarias con Jest.
- Cobertura incluye:
  - **CityService:** Validación de cálculos de ciudades cercanas, uso de API y almacenamiento en caché.
  - **SearchModule:** Verificación de la funcionalidad de búsqueda y filtrado.
  - **NearestCitiesModule:** Validación de la visualización correcta de las ciudades cercanas.
- Mocks para `HttpClient` y `CityCache`.

## Requisitos Funcionales

1. Los usuarios pueden buscar ciudades ingresando el nombre en un campo de texto.
2. Al seleccionar una ciudad de la lista, se muestran las 3 ciudades más cercanas.
3. Los usuarios pueden borrar el campo de búsqueda sin eliminar la lista.
4. Los datos de las ciudades deben almacenarse en caché para optimizar la experiencia del usuario.
5. El sistema calcula las distancias entre ciudades utilizando coordenadas geográficas.
6. Se debe mostrar un indicador de carga mientras se calculan las ciudades más cercanas.

## Algoritmo de Búsqueda de Ciudades Cercanas

1. **Entrada:** Una ciudad seleccionada con coordenadas (`lat`, `lng`) y una lista de ciudades.
2. **Validación:** Filtra la lista de ciudades, excluyendo la ciudad seleccionada y asegurando datos válidos.
3. **Cálculo de Distancia:** Utiliza la fórmula **Haversine** para calcular la distancia entre las coordenadas de la ciudad base y cada ciudad restante.
4. **Ordenamiento:** Ordena las ciudades por distancia ascendente.
5. **Resultado:** Devuelve las N ciudades más cercanas (configuradas mediante variables de entorno).

## Ejemplo del Algoritmo

Dado:
- Ciudad base: `City A (40.7128, -74.0060)`
- Ciudades:
  - `City B (34.0522, -118.2437)`
  - `City C (41.8781, -87.6298)`
  - `City D (25.7617, -80.1918)`

El algoritmo calcula distancias y devuelve:
1. `City C`
2. `City D`
3. `City B`

---

# Empezando

>**Nota:** Asegúrate de haber completado las instrucciones de [Configuración del Entorno de React Native](https://reactnative.dev/docs/environment-setup) hasta el paso "Crear una nueva aplicación" antes de continuar.

## Paso 1: Iniciar el Servidor Metro

Primero, necesitas iniciar **Metro**, el _bundler_ de JavaScript que viene con React Native.

Para iniciar Metro, ejecuta el siguiente comando desde la raíz de tu proyecto de React Native:

```bash
# usando npm
npm start

# O usando Yarn
yarn start
```

## Paso 2: Iniciar tu Aplicación

Deja correr Metro Bundler en su propia terminal. Abre una nueva terminal desde la raíz de tu proyecto de React Native. Ejecuta el siguiente comando para iniciar tu aplicación en _Android_ o _iOS_:

### Para Android

```bash
# usando npm
npm run android

# O usando Yarn
yarn android
```

### Para iOS

```bash
# usando npm
npm run ios

# O usando Yarn
yarn ios
```

Si todo está configurado correctamente, deberías ver tu nueva aplicación corriendo en tu _Emulador de Android_ o _Simulador de iOS_ en poco tiempo, siempre que tengas configurado correctamente tu emulador/simulador.

Esta es una forma de ejecutar tu aplicación; también puedes hacerlo directamente desde Android Studio y Xcode respectivamente.

## Paso 3: Modificar tu Aplicación

Ahora que has ejecutado la aplicación con éxito, vamos a modificarla.

1. Abre `App.tsx` en tu editor de texto favorito y edita algunas líneas.
2. Para **Android**: Presiona la tecla <kbd>R</kbd> dos veces o selecciona **"Reload"** desde el **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (en Windows y Linux) o <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (en macOS)) para ver tus cambios.

   Para **iOS**: Presiona <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> en tu Simulador de iOS para recargar la aplicación y ver tus cambios.

## ¡Felicidades! 🎉

Has ejecutado y modificado con éxito tu aplicación React Native. 🎉

---

¡Disfruta trabajando con este proyecto! Las contribuciones y comentarios son bienvenidos.
