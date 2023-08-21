import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 30 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 10, max: 100 }).optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string().length({ min: 10, max: 30 }),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  created_by: g.relation(() => User),

})

export default config({
  schema: g
})
