❗ Description:
Write a function that adds a named property to an object.It must be possible to set the property to a new value.If the property already exists on the object, and error should be thrown.

// ✅ SOLUTION:

function addProperty(obj, prop, value) {
   if (prop in obj) throw new Error()
   obj[prop] = value
}