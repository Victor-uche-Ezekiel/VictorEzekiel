"use client"

import { MotionDiv } from "./motion/motion-div"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center pt-24 pb-8 md:pb-12 md:pt-32">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          {title}
        </h1>
      </MotionDiv>
      {description && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
        </MotionDiv>
      )}
    </div>
  )
}
