---
title: 🧼 cleaning up jest mocks
slug: cleaning-up-jest-mocks
date: "2022-05-15"
topic: coding
---

In [jest][jest], there are three different ways to clean up a [mock function][mock-function].

-   [mockClear][mock-clear]
-   [mockReset][mock-reset]
-   [mockRestore][mock-restore]

Each different method cleans up a different subset of functionality, with `mockClear` being the least destructive and `mockReset` being the most destructive.

## mock clear

```javascript
mockFn.mockClear()
```

Running this function removes all the statistics about invocations of the mock function. It sets all of the properties to their default value of `[]`.

```javascript
// invocation statistics
mockFn.mock.calls = []
mockFn.mock.results = []
mockFn.mock.instances = []
mockFn.mock.contexts = []
```

Typically you would want to run `mockClear` between tests that all require the same mock functionality. This allows you to start each test with a clean slate when it comes to invocations so you can make accurate assertions on how many times functions were called with what data.

## mock reset

```javascript
mockFn.mockReset()
```

Executing this method resets all of the invocation statistics, and also gets rid of any mocked functionality, like return values or implementations.

```javascript
// invocation statistics
mockFn.mock.calls = []
mockFn.mock.results = []
mockFn.mock.instances = []
mockFn.mock.contexts = []

// mock functionality
mockFn.mockReturnValue(undefined)
mockFn.mockResolvedValue(undefined)
mockFn.mockRejectedValue(undefined)
mockFn.mockImplementation(() => undefined)
```

You could use `mockReset` in between tests that require different data returned from a mock function. Each test would then declare what data it expects from the mock to make assertions later on.

## mock restore

```javascript
mockFn.mockRestore()
```

Executing this function acts like you never called `jest.mock()` in the first place. It _restores_ the original functionality of the method, wipes any mock functionality, and removes all invocation statistics.

Restoring mocks can be helpful when some tests require mock functionality and others do not.

[jest]: https://jestjs.io
[mock-function]: https://jestjs.io/docs/mock-function-api
[mock-clear]: https://jestjs.io/docs/mock-function-api#mockfnmockclear
[mock-reset]: https://jestjs.io/docs/mock-function-api#mockfnmockreset
[mock-restore]: https://jestjs.io/docs/mock-function-api#mockfnmockrestore
