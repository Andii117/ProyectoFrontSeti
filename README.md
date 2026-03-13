# 🧬 Detector de Mutantes

Aplicación desarrollada en **Angular** que permite analizar una secuencia de ADN para determinar si pertenece a un **Humano** o a un **Mutante**.

El sistema analiza una matriz **NxN** compuesta únicamente por las letras:

```
A T C G
```

Cada letra representa una base nitrogenada del ADN.

---

# 📖 Descripción del problema

Un **mutante** es aquel que tiene **dos o más secuencias de 4 letras iguales consecutivas** en la matriz de ADN.

Las secuencias pueden encontrarse en:

- Horizontal →
- Vertical ↓
- Diagonal derecha ↘

Si se detectan **dos o más secuencias**, el ADN es considerado **mutante**.

De lo contrario, se considera **humano**.

---

# 🧠 Ejemplo de matriz de ADN

```
A T G C G A
C A G T G C
T T A T G T
A G A A G G
C C C C T A
T C A C T G
```

En este ejemplo existen múltiples secuencias mutantes como:

```
CCCC
GGGG
```

---

# ⚙️ Tecnologías utilizadas

- **Angular**
- **TypeScript**
- **CSS**
- **HTML**

---

# 🚀 Ejecución del proyecto

1️⃣ Instalar dependencias

```
npm install
```

2️⃣ Ejecutar el proyecto

```
ng serve
```

3️⃣ Abrir en el navegador

```
http://localhost:4200
```

---

# 🧬 Uso de la aplicación

1. Ingresar la secuencia de ADN en el área de texto.
2. Cada línea representa una fila de la matriz.
3. Presionar **"Analizar ADN"**.
4. El sistema mostrará:
   - La matriz de ADN
   - Las secuencias detectadas
   - Si el ADN es **Humano o Mutante**

---

# 📌 Reglas de validación

El ADN ingresado debe cumplir:

- Solo caracteres **A, T, C, G**
- Matriz **NxN**
- Cada fila debe tener la misma longitud

Ejemplo válido:

```
ATGCGA
CAGTGC
TTATGT
AGACGG
CACCTA
TCACTG
```

---

# 👨 Ejemplo de ADN Humano

Este ADN **NO contiene dos secuencias repetidas**.

```
ATGCGA
CAGTGC
TTATGT
AGACGG
CACCTA
TCACTG
```

Formato JSON:

```json
["ATGCGA", "CAGTGC", "TTATGT", "AGACGG", "CACCTA", "TCACTG"]
```

Resultado esperado:

```
👨 Es Humano
```

---

# 🧬 Ejemplo de ADN Mutante

Este ADN contiene **dos secuencias repetidas**:

```
ATGCGA
CAGTGC
TTATGT
AGAAGG
CCCCTA
TCACTG
```

Secuencias encontradas:

```
AAAA
CCCC
```

Formato JSON:

```json
["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
```

Resultado esperado:

```
🧬 Es Mutante
```

---

# 🧪 Tipos de detección implementados

El algoritmo analiza:

### Horizontal

```
AAAA
```

### Vertical

```
A
A
A
A
```

### Diagonal derecha

```
A
  A
    A
      A
```

---

# 🧩 Visualización

La aplicación muestra una **cuadrícula NxN** donde:

- Cada celda representa una base del ADN.
- Las secuencias mutantes detectadas se resaltan en **rojo**.

---

# 👨‍💻 Autor

Proyecto desarrollado como ejercicio de **detección de mutaciones en ADN** usando Angular.

---
