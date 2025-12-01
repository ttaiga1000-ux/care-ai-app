<<<<<<< HEAD
export async function askAIForAdvice(form, score) {
  const res = await fetch("/api/advice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, score }),
  });

  const data = await res.json();
  return data.advice;
}
=======
export async function askAIForAdvice(form, score) {
  const res = await fetch("/api/advice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, score }),
  });

  const data = await res.json();
  return data.advice;
}
>>>>>>> a46fed143bb2af8b301b367fbfdacfcfd38cf4ab
