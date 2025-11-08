import { z } from "zod"
import { formOptions, useForm } from "@tanstack/react-form"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@tanstack/react-router"

const formSchema = z.object({
  name: z.string().min(5)
})

function CreateMeeting() {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      name: ""
    },
    validators: {
      onSubmit: formSchema
    },
    ...formOptions,
    onSubmit: async ({ value }) => {
      navigate({ to: "/meeting/$meetingId", params: { meetingId: value.name } })
    }
  })

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create meeting</FieldLegend>
            <FieldDescription>
              Enjoy your meeting
            </FieldDescription>
            <FieldGroup>
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Meeting name
                      </FieldLabel>
                      <Input
                        id={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Sprint Planning"
                        required
                      />
                      <FieldDescription>
                        Choose a appropriate name
                      </FieldDescription>
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Create</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export { CreateMeeting }