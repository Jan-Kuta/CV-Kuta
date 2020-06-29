// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch(process.env.jsonUrl)
  const data = await response.json()
  res.statusCode = 200
  res.json(data)
}
