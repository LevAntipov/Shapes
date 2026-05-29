# Shapes

TypeScript-библиотека для работы с геометрическими фигурами: круг, прямоугольник, треугольник.  
Поддерживаются вычисление площади и периметра, валидация параметров, изменение размеров, клонирование и сериализация в JSON.


## Подключение в другой проект

npm install github:LevAntipov/Shapes

## Использование

### Импорт

```ts
import {
  Shape,
  Circle,
  Rectangle,
  Triangle,
  createCircle,
  createRectangle,
  createTriangle,
  area,
  perimeter,
} from "shapes";

import type {
  ShapeKind,
  CircleJSON,
  RectangleJSON,
  TriangleJSON,
  SerializedShape,
} from "shapes";
```

### Создание фигур и вычисления

```ts
const circle = createCircle(10);
console.log(area(circle));       // ~314.159
console.log(perimeter(circle));  // ~62.832 (длина окружности)

const rectangle = createRectangle(4, 6);
console.log(area(rectangle));       // 24
console.log(perimeter(rectangle));  // 20

const triangle = createTriangle(3, 4, 5);
console.log(area(triangle));       // 6
console.log(perimeter(triangle));  // 12
```

### Изменение размеров

```ts
circle.radius = 5;
rectangle.width = 8;
rectangle.height = 10;
triangle.sideA = 6;
```

При невалидных значениях (отрицательные, не число, нарушение неравенства треугольника) выбрасывается `Error`.

### Клонирование и копирование

```ts
const original = createCircle(10);

// Новый объект с теми же размерами
const duplicate = original.clone();
duplicate.radius = 20; // original не меняется

// Скопировать размеры в уже существующий объект
const target = createCircle(1);
target.copy(original);
```

### Сериализация

```ts
const json = circle.toJSON();
// { kind: "circle", radius: 10 }

const restored = Circle.fromJSON(json);

const rectJson = rectangle.toJSON();
const restoredRect = Rectangle.fromJSON(rectJson);

const triJson = triangle.toJSON();
const restoredTri = Triangle.fromJSON(triJson);
```

`fromJSON` каждого класса принимает JSON **только своего** типа (`kind` должен совпадать).

## Публичный API

| Экспорт | Назначение |
|---------|------------|
| `Shape` | Абстрактный базовый класс (`area`, `perimeter`, `copy`, `toJSON`, `clone`) |
| `Circle`, `Rectangle`, `Triangle` | Классы фигур |
| `createCircle`, `createRectangle`, `createTriangle` | Фабрики |
| `area`, `perimeter` | Вычисления для любой фигуры |
| `ShapeKind`, `*JSON`, `SerializedShape` | Типы для сериализации |

## Правила валидации

- Все размеры — конечные числа (`Number.isFinite`).
- Все размеры строго больше `0`.
- Стороны треугольника удовлетворяют неравенству треугольника (при создании и при изменении любой стороны).
