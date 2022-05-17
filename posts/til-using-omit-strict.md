---
title: 'TIL: Using OmitStrict in TypeScript'
tags: TIL (Today I Learned),TypeScript
date: '2022-05-17'
---
For one of my tasks I used TypeScript's `Omit` built-in helper type. It worked, but one of my colleagues suggested to use `OmitStrict` instead and linked [this article](https://nishanths.svbtle.com/a-stricter-omit-type). It turns out, that `Omit` allows you to specify non-existent properties and shows no compilation errors.

As an example, let's say we have this code:

```typescript
type User = {
  id: number
  name: string
  lastName: string
  profession: string
}

type X = Omit<User, 'id' | 'profession'>
// {
//   name: string
//   lastName: string
// }
```

We have `User` type from which we created `X` type. But what if we rename `profession` property?

```typescript
type User = {
  id: number
  name: string
  lastName: string
  role: string // Renamed
}

type X = Omit<User, 'id' | 'profession'> // No compilation error!
// {
//   name: string
//   lastName: string
//   role: string
// }
```

Now we have the unwanted property in our object and no compilation errors. And that's why we have to use `OmitStrict` type instead of the default `Omit`.

In my team and in the article I linked above this type is used:

```typescript
type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

Now compare it to original `Omit`:

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

We code rid of `any` and now it works perfectly, showing where the error is.
