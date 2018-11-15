import React from 'react'
import styled from 'styled-components'
import Flex from './node_modules/mdx-deck/dist/Flex'
import Box from './node_modules/mdx-deck/dist/Box'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh',
})

const SplitHorizontal = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Flex
        css={{
         flexDirection: 'row',
          alignItems: 'center',
          height: '100%'
        }}>
        <Box height={1 / 2}>
          {a}
        </Box>
        <Box  height={1 / 2}>
          {rest}
        </Box>
      </Flex>
    </Root>
  )
}

export default SplitHorizontal