import Head from 'next/head'
import { END } from 'redux-saga'
import { loadData } from '../actions'
import { wrapper } from '../store'

import CV from '../components/cv'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jan Kuta - CV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/index.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CV />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

  if (!store.getState()) {
    store.dispatch(loadData())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Page
