---
title: 💩 prisma crud operations
slug: prisma-crud-operations
date: "2022-10-01"
topic: coding
---

Lately I've been working with [PostgreSQL][postgres] databases, using [Prisma][prisma] as the ORM to make life easier. I always forget how to do basic CRUD operations, so here's a little reference post that hopefully helps you as much as it helps me!

## 🆕 create

```typescript
const createTodo = async (userId: string, content: string) => {
    const todo = await db.todo.create({
        data: {
            content,
            userId,
        },
    })

    return todo
}
```

## 📚 read

```typescript
const getTodos = async (userId: string) => {
    const todos = await db.todo.findMany({
        where: {
            userId: {
                equals: userId,
            },
        },
    })

    return todos
}
```

## ☝🏼 update

```typescript
const updateTodo = async (id: string, data: Partial<Todo>) => {
    const todo = await db.todo.update({
        where: {
            id,
        },
        data,
    })

    return todo
}
```

## ⛔ delete

```typescript
const deleteTodo = async (id: string) => {
    const todo = await db.todo.delete({
        where: {
            id,
        },
    })

    return todo
}
```

[postgres]: https://postgresql.org
[prisma]: https://prisma.io
