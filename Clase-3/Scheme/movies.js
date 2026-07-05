const z = require('zod')
const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'Title is required'
  }).max(100),
  year: z.number().min(1888).max(new Date().getFullYear()),
  director: z.string().max(100),
  duration: z.number().min(0),
  poster: z.string().url(),
  genre: z.array(z.enum(['Action', 'Crime', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'])),
  rate: z.number().min(0).max(10)
})

function validateMovie (object) { // Validar la película usando el esquema definido
  return movieSchema.safeParse(object)
}
function validateMoviePatch (object) { // Validar la película usando el esquema definido
  return movieSchema.partial().safeParse(object)
}
module.exports = { validateMovie, validateMoviePatch }
