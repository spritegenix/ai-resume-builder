import Layout from '@/components/layout/Layout'
import { resumeStyles } from '@/components/ResumeStyles/Styles'
import Wrapper from '@/components/Wrappers'
import { Link } from 'next-view-transitions'
import React from 'react'

export default function TemplatesPage() {
  return (
    <Layout>
    <Wrapper className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumeStyles.map((style) => (
            <TemplateCard key={style.id} style={style} />
        ))}
    </Wrapper>

    </Layout>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TemplateCard(style:any) {
  return (
    <Link href={`/editor?resumeId=${style.id}?style=${style.id}`}>page</Link>
  )
}

