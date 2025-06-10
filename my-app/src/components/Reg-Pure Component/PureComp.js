import React, { PureComponent } from 'react'

// A PureComponent re-renders only if its props or state have changed based on a shallow comparison.

// ✅ It will re-render when:
// 1. Primitive props (like string, number, boolean) change in value.
// 2. Object/array props change reference (i.e., new object or array is passed).
// 3. Local state inside the PureComponent changes.

// ❌ It will NOT re-render when:
// 1. The props or state are the same as the previous ones (by shallow comparison).
// 2. You pass an unchanged object or array reference, even if internal values were mutated.

// Pure Component: It implement shouldComponentUpdate with shallow props and state comparision
// Agar parent component ki state value change hoti hai toh uske children component re-render honge.
// But ager children component is Pure Component then Pure Component render nahi hoga. 
// Becuase Pure component perform shallow comparision. 

// 1. Eg. Prev state (this.state.name) = "Nadeem" and Current State (this.state.name) = "Nadeem"
// Above example case me pure component re-render nahi hoga. But regular component re-render hoga

// 2. a = [1, 2, 3] and b = [1, 2, 3] and c = a
// (a === b) return false: Is case me Pure component re-render hoga
// (a === c) return true: Is case mei Pure component re-render nahi hoga


class PureComp extends PureComponent {
  render() {
    console.log(`Inside Pure Component Render()`);
    return (
      <div>
        Pure Component: {this.props.name}
      </div>
    )
  }
}

export default PureComp
