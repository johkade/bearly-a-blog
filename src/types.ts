export type Author = {
  name: string
  profileImageUrl: string
  links?: {
    github?: string
    linkedIn?: string
    twitter?: string
  }
}

export type Post = {
  title: string
  body: string
  slug: string
  category:
    | "Web Development"
    | "Native Development"
    | "Software Testing"
    | "React Native"
    | "Other"
  tags: string[]
  createdAt: string
  author: Author | "me"
}
