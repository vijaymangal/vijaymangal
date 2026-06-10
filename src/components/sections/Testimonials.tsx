import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { testimonials } from '@/data/testimonials'
import { fadeUp, staggerContainer } from '@/utils/motion'

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-section-testimonials" ariaLabelledBy="testimonials-heading">
      <Container>
        <SectionHeading
          number="05"
          label="Testimonials"
          headingId="testimonials-heading"
          title="Kind words"
          description="What colleagues and collaborators have said about working with me."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="divide-y divide-[var(--color-border)]"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              variants={fadeUp}
              className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <blockquote className="md:col-span-8 lg:col-span-9">
                <p className="text-lg italic leading-[1.75] text-white md:text-xl md:leading-[1.8]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-4 md:col-span-4 md:items-start lg:col-span-3 lg:pt-1">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                  className="h-12 w-12 shrink-0 rounded-full border border-[var(--color-border)] object-cover ring-2 ring-accent/10"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <cite className="not-italic text-base font-semibold text-white">
                    {testimonial.name}
                  </cite>
                  <p className="mt-1 text-base leading-snug text-muted">
                    {testimonial.role}
                    <span className="text-muted/60"> · </span>
                    {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
