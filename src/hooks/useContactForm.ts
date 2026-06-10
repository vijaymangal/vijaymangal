import { useState, useCallback, type FormEvent } from 'react'
import type { ContactFormData, ContactFormErrors } from '@/types'
import { validateContactForm } from '@/utils/validation'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const validationErrors = validateContactForm(form)

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setIsSubmitting(true)

      await new Promise((resolve) => setTimeout(resolve, 1200))

      setIsSubmitting(false)
      setIsSuccess(true)
      setForm(initialForm)
    },
    [form]
  )

  const resetSuccess = useCallback(() => setIsSuccess(false), [])

  return {
    form,
    errors,
    isSubmitting,
    isSuccess,
    updateField,
    handleSubmit,
    resetSuccess,
  }
}
