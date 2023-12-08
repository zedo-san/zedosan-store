"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useLogin from "./useLogin";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LoginFormCard = () => {
  const { login, loginForm, errorMessage } = useLogin();
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in to your dashboard.</CardDescription>
      </CardHeader>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(login)}>
          <CardContent>
            {errorMessage && (
              <div className="pb-6">
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              </div>
            )}
            <div className="max-w-md w-full flex flex-col gap-4">
              <FormField
                control={loginForm.control}
                name="emailAddress"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel htmlFor="emailAddress">Email address</FormLabel>
                      <FormControl>
                        <Input id="emailAddress" placeholder="*****@domain.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel htmlFor="emailAddress">Password</FormLabel>
                      <FormControl>
                        <Input id="password" placeholder="*******" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </CardContent>
          <CardFooter className="grid w-full mt-4">
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginFormCard;
