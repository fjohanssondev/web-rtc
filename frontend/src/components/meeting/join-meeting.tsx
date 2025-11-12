import { z } from "zod";
import { formOptions, useForm } from "@tanstack/react-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link2 } from "lucide-react";

const formSchema = z.object({
  displayName: z.string().min(3).max(15),
  url: z.string(),
});

function JoinMeeting() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      displayName: "",
      url: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    ...formOptions,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Link2 />
          <span>Join Meeting</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>Join Meeting</DialogTitle>
          <DialogDescription>Soon you're in a cozy room</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Join Meeting</FieldLegend>
              <FieldDescription>Soon you're in a cozy room</FieldDescription>
              <FieldGroup>
                <form.Field
                  name="displayName"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          Displayname
                        </FieldLabel>
                        <Input
                          id={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="John Doe"
                          required
                        />
                        <FieldDescription>
                          Pick a name others will see you as
                        </FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="url"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>URL</FieldLabel>
                        <Input
                          id={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="http://localhost:5173/join/Uiwue2873"
                          required
                        />
                        <FieldDescription>
                          Paste the URL the host gave you
                        </FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit">Join</Button>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
            </Field>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { JoinMeeting };
