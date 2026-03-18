"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  country: string;
  monthlyVolume: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type FormTouched = Partial<Record<keyof FormState, boolean>>;

const initialState: FormState = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  monthlyVolume: "",
  message: "",
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Le nom complet est requis.";
  }
  if (!values.company.trim()) {
    errors.company = "Le nom de l'entreprise est requis.";
  }
  if (!isEmailValid(values.email)) {
    errors.email = "Une adresse email valide est requise.";
  }
  if (!values.country.trim()) {
    errors.country = "Le pays est requis.";
  }
  if (!values.monthlyVolume.trim()) {
    errors.monthlyVolume = "Selectionnez un volume mensuel estime.";
  }

  return errors;
}

function FieldState({
  isVisible,
  message,
}: Readonly<{
  isVisible: boolean;
  message: string;
}>) {
  if (!isVisible) {
    return null;
  }

  return (
    <p className="mt-1 flex items-center gap-1 text-xs text-heritage-blue">
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.414l-7.22 7.22a1 1 0 01-1.415 0L3.29 9.145a1 1 0 111.414-1.414l4.073 4.073 6.513-6.514a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </p>
  );
}

export default function RequestQuotePage() {
  const [values, setValues] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const errors = useMemo(() => validate(values), [values]);
  const isFormValid = Object.keys(errors).length === 0;

  const markTouched = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allTouched: FormTouched = {
      fullName: true,
      company: true,
      email: true,
      country: true,
      monthlyVolume: true,
      message: true,
    };
    setTouched(allTouched);
    setSubmitError("");
    setSubmitSuccess("");

    const currentErrors = validate(values);
    if (Object.keys(currentErrors).length > 0) {
      setSubmitError("Veuillez corriger les champs signales avant d'envoyer.");
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      trackEvent("generate_b2b_lead", {
        company_size: values.monthlyVolume,
        country: values.country,
      });
      setSubmitSuccess(
        "Merci. Votre demande est recue. Notre equipe vous repondra sous un jour ouvre."
      );
      setValues(initialState);
      setTouched({});
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <section className="bg-dakhla-sand/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-rio-navy/10 bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8" data-reveal>
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.3em] text-rio-navy/60">
            Rigueur de Sourcing
          </p>
          <h1 className="font-serif text-3xl text-rio-navy sm:text-4xl">
            Securiser Votre Allocation Noble
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-rio-navy/75">
            Pour garantir l'integrite de votre chaine d'approvisionnement, 
            veuillez renseigner vos besoins en volume et vos criteres de calibre. 
            Notre equipe analysera la disponibilite de notre ecosysteme pour votre marche.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5" data-reveal>
          <div>
            <label
              htmlFor="fullName"
              className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
            >
              Nom complet *
            </label>
            <input
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, fullName: event.target.value }))
              }
              onBlur={() => markTouched("fullName")}
              aria-invalid={Boolean(touched.fullName && errors.fullName)}
              className={`min-h-11 w-full border-b-2 bg-transparent px-1 py-2 text-rio-navy outline-none transition-colors ${touched.fullName && errors.fullName ? "border-red-500" : "border-heritage-blue focus-visible:border-living-orange"}`}
            />
            {touched.fullName && errors.fullName && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.fullName}
              </p>
            )}
            <FieldState
              isVisible={Boolean(touched.fullName && !errors.fullName)}
              message="Champ valide"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
            >
              Entreprise *
            </label>
            <input
              id="company"
              name="company"
              value={values.company}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, company: event.target.value }))
              }
              onBlur={() => markTouched("company")}
              aria-invalid={Boolean(touched.company && errors.company)}
              className={`min-h-11 w-full border-b-2 bg-transparent px-1 py-2 text-rio-navy outline-none transition-colors ${touched.company && errors.company ? "border-red-500" : "border-heritage-blue focus-visible:border-living-orange"}`}
            />
            {touched.company && errors.company && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.company}
              </p>
            )}
            <FieldState
              isVisible={Boolean(touched.company && !errors.company)}
              message="Champ valide"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
            >
              Email professionnel *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              onBlur={() => markTouched("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
              className={`min-h-11 w-full border-b-2 bg-transparent px-1 py-2 text-rio-navy outline-none transition-colors ${touched.email && errors.email ? "border-red-500" : "border-heritage-blue focus-visible:border-living-orange"}`}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.email}
              </p>
            )}
            <FieldState
              isVisible={Boolean(touched.email && !errors.email)}
              message="Champ valide"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="country"
                className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
              >
                Pays *
              </label>
              <input
                id="country"
                name="country"
                value={values.country}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, country: event.target.value }))
                }
                onBlur={() => markTouched("country")}
                aria-invalid={Boolean(touched.country && errors.country)}
                className={`min-h-11 w-full border-b-2 bg-transparent px-1 py-2 text-rio-navy outline-none transition-colors ${touched.country && errors.country ? "border-red-500" : "border-heritage-blue focus-visible:border-living-orange"}`}
              />
              {touched.country && errors.country && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.country}
                </p>
              )}
              <FieldState
                isVisible={Boolean(touched.country && !errors.country)}
                message="Champ valide"
              />
            </div>

            <div>
              <label
                htmlFor="monthlyVolume"
                className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
              >
                Volume mensuel estime *
              </label>
              <select
                id="monthlyVolume"
                name="monthlyVolume"
                value={values.monthlyVolume}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    monthlyVolume: event.target.value,
                  }))
                }
                onBlur={() => markTouched("monthlyVolume")}
                aria-invalid={Boolean(touched.monthlyVolume && errors.monthlyVolume)}
                className={`min-h-11 w-full border-b-2 bg-transparent px-1 py-2 text-rio-navy outline-none transition-colors ${touched.monthlyVolume && errors.monthlyVolume ? "border-red-500" : "border-heritage-blue focus-visible:border-living-orange"}`}
              >
                <option value="">Selectionnez</option>
                <option value="<500kg">&lt; 500kg</option>
                <option value="500-2000kg">500 - 2000kg</option>
                <option value="2000kg+">2000kg+</option>
              </select>
              {touched.monthlyVolume && errors.monthlyVolume && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.monthlyVolume}
                </p>
              )}
              <FieldState
                isVisible={Boolean(touched.monthlyVolume && !errors.monthlyVolume)}
                message="Champ valide"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-rio-navy/70"
            >
              Message (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, message: event.target.value }))
              }
              onBlur={() => markTouched("message")}
              className="w-full rounded-md border border-heritage-blue/40 px-3 py-2 text-rio-navy outline-none transition-colors focus-visible:border-living-orange focus-visible:ring-2 focus-visible:ring-living-orange/20"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              title={
                !isFormValid
                  ? "Veuillez completer tous les champs obligatoires."
                  : undefined
              }
              className="min-h-11 rounded-none bg-living-orange px-8 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Envoi..." : "Obtenir mon devis"}
            </button>
            <p className="mt-2 text-xs text-rio-navy/65">
              Notre equipe vous repondra sous un jour ouvre avec un devis detaille.
            </p>
          </div>

          {submitError && (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
              {submitError}
            </p>
          )}
          {submitSuccess && (
            <p
              className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"
              role="status"
            >
              {submitSuccess}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
