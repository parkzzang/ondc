// pages/login.tsx
import React from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("유효한 이메일을 입력해주세요.").required("이메일은 필수 입력 항목입니다."),
  password: Yup.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다.").required("비밀번호는 필수 입력 항목입니다."),
});

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log("로그인 데이터:", values);

    // 홈 화면으로 라우팅
    router.push("/"); // "/"는 홈 화면 경로
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">로그인</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="이메일"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="email" component="span" className="text-red-500 text-sm" />}
                />
              </div>
              <div className="mb-6">
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="비밀번호"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="password" component="span" className="text-red-500 text-sm" />}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="flex items-center justify-center mb-4"
              >
                {isSubmitting ? <CircularProgress size={24} className="text-white" /> : "로그인"}
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-sm">
          계정이 없으신가요?{" "}
          <Link href="/signup" className="text-blue-500">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
