'use server'

interface FormState {
  success: boolean
  errors: {
    name?: string
    email?: string
  }
  message: string
}

export const formsubmission=async (
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> =>
{
  const name = (formData.get('name') as string)?.trim() || ''
  const email = (formData.get('email') as string)?.trim() || ''

  const errors: FormState['errors'] = {}

  if(name.length<8)
  {
    errors.name="Name must be atleast 8 characters"

  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) 
  {
    errors.email = 'Invalid email address.'
  }

   if (Object.keys(errors).length > 0) 
  {
    return {
      success:false,
      errors,
      message: 'Error ',
    }
  }

   return {
    success: true,
    errors: {},
    message: `Form Submitted`,
  }
}

export default formsubmission;