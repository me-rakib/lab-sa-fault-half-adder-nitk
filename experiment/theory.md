### SA Fault

Fault is a logic level abstraction of a physical defect. It is used to describe the change in the logic function of a device caused by the defect. Fault abstractions reduce the number of conditions that must be considered in deriving tests.

Logical faults are used to represent physical faults. They simplify the fault analysis process and reduces the number of faults.

A stuck-at fault (SAF) is a logic-level fault that mimics a manufacturing defect on a digital circuit. An SAF is of two types- stuck-at-0 (SA0) and stuck-at-1 (SA1) faults. Individual bit or signal on a wire of a logic gate is assumed to be stuck at Logical '1' or '0' if that bit or the signal is converted to logic-1 or logic-0 irrespective of its previous or assigned value.

### Half-Adder

A half-adder is a combinational circuit that is used to add two binary digits. This simple addition consists of four possible elementary operations, namely, 0+0=0, 0+1=1, 1+0=1 and 1+1=10. The first three operations produce a sum that is one bit long, but when both augend and addend bits are equal to logical 1, the binary sum consists of two digits. The higher significant bit of this result is called a carry. When the augend and addend numbers contain more significant digits, the carry obtained from the addition of two bits is added to the next higher-order pair of significant bits.

The half adder is named so due to the fact that two half adders can be employed to implement a full adder. It needs two input and two output bits. The input variables designate the augend and addend bits, while the output bits produce the sum and the carry.

The truth table of the half adder is as shown below. The inputs are designated as x and y, while the S represents the sum output and the C represents the carry output.

<p style="text-align:center"><table>
                            <thead>
                                <tr>
                                    <th colspan="2">Input</th>
                                    <th colspan="2">Output</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>S</td>
                                    <td>C</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                        </p>

The carry output is 0 unless both the inputs are 1. The S(sum) output represents the least significant bit of the addition operation.

The simplified Boolean expressions for the two outputs can be obtained directly from the truth table. They are:

<p style="text-align:center">S = x ⊕ y </p>

<p style="text-align:center">C = xy </p>

Thus, the sum is the result of performing an EXOR operation on the input variables, while the carry output is obtained by ANDing the two input variables. We can therefore use an exclusive-OR gate and an AND gate to implement the half adder circuit as shown below.

<p style="text-align:center">
<img src="./images/half-adder.png" style="width: 20rem; margin-left: auto; margin-right: auto;max-width: 100%;
  height: auto;"></p>