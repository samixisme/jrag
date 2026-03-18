import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import RequestQuotePage from "./page";

describe("RequestQuotePage", () => {
  test("marks invalid email on blur", async () => {
    render(<RequestQuotePage />);

    fireEvent.change(screen.getByLabelText(/email professionnel/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.blur(screen.getByLabelText(/email professionnel/i));

    await waitFor(() => {
      expect(
        screen.getByText(/une adresse email valide est requise/i)
      ).toBeInTheDocument();
    });
  });

  test("submits successfully when required fields are valid", async () => {
    render(<RequestQuotePage />);

    fireEvent.change(screen.getByLabelText(/nom complet/i), {
      target: { value: "Amine Nadir" },
    });
    fireEvent.change(screen.getByLabelText(/entreprise/i), {
      target: { value: "Lagoon Foods" },
    });
    fireEvent.change(screen.getByLabelText(/email professionnel/i), {
      target: { value: "amine@lagoonfoods.com" },
    });
    fireEvent.change(screen.getByLabelText(/pays/i), {
      target: { value: "Morocco" },
    });
    fireEvent.change(screen.getByLabelText(/volume mensuel estime/i), {
      target: { value: "500-2000kg" },
    });

    fireEvent.click(screen.getByRole("button", { name: /obtenir mon devis/i }));

    await waitFor(
      () => {
        expect(
          screen.getByText(/notre equipe vous repondra sous un jour ouvre/i)
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
