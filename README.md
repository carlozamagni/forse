# forse

Forse is a basic wrapper to the funny web api 'forse' by [@peachofpersia](https://twitter.com/peachofpersia). You can browse the tips @ [forse.herokuapp.com](http://forse.herokuapp.com)

Currently only retrieving of random tips is supported:

```javascript

const forse = require('forse')(
	{userAgent:'my-custom-user-agent'})

// the user agent parameter is optional, you can just initialize the wrapper with a null param.
// const forse = require('forse')()

forse.random((err, tip)=>{
	console.log(tip)
})


```

the api response will be a random tip parsed into something similar to:

```
{ id: 19,
  tip: 'forse è un problema di spazio su disco',
  created_at: '2016-02-10T23:26:27.000Z'
}
```

**Note:** the tips are at the moment only in italian language.
