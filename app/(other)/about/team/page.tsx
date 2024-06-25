import TeamLayout from '@/components/About/Team'
import Header from '@/components/shared/Header/HeaderAbout'
import React from 'react'

const TeamPage = () => {
  return (
    <section className="md:min-h-[1200px]">
      <Header
        type="team"
        title="team"
        image="/assets/images/team.svg"
      />
      <TeamLayout />
    </section>
  )
}

export default TeamPage