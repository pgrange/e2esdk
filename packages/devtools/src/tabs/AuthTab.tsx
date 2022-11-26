import React from 'react'
import { FiLogIn, FiPlusCircle } from 'react-icons/fi'
import { LoginForm, SignupForm } from '../components/AuthForm'
import {
  Section,
  SectionContainer,
  SectionHeader,
} from '../components/Sections'

export const AuthTab: React.FC = () => {
  return (
    <SectionContainer>
      <Section>
        <SectionHeader icon={FiLogIn}>Log in</SectionHeader>
        <LoginForm />
      </Section>
      <Section>
        <SectionHeader icon={FiPlusCircle}>Sign up</SectionHeader>
        <SignupForm />
      </Section>
    </SectionContainer>
  )
}
